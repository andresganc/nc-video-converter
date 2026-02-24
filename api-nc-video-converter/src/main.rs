
use axum::{
    extract::multipart::Multipart,
    response::IntoResponse,
    routing::post,
    Json, Router,
};

use serde::Serialize;
use std::{net::SocketAddr, path::Path};
use tokio::{fs::File, io::AsyncWriteExt};
use tower_http::cors::CorsLayer;
use uuid::Uuid;

#[derive(Serialize)]
struct UploadedFile {
    filename: String,
    size: u64,
    mime: String,
}

async fn upload(mut multipart: Multipart) -> impl IntoResponse {
    let mut uploaded_files = Vec::new();

    while let Ok(Some(field)) = multipart.next_field().await {
        let file_name = field
            .file_name()
            .map(|n| n.to_string())
            .unwrap_or("unknown".into());

        let mime = field
            .content_type()
            .map(|m| m.to_string())
            .unwrap_or("unknown".into());

        let id = Uuid::new_v4().to_string();
        let save_path = format!("uploads/{}_{}", id, file_name);

        if !Path::new("uploads").exists() {
            tokio::fs::create_dir("uploads").await.unwrap();
        }

        let mut file = File::create(&save_path).await.unwrap();
        let mut size: u64 = 0;

        let mut stream = field;
        while let Ok(Some(chunk)) = stream.chunk().await {
            size += chunk.len() as u64;
            file.write_all(&chunk).await.unwrap();
        }

        uploaded_files.push(UploadedFile {
            filename: file_name,
            size,
            mime,
        });
    }

    Json(uploaded_files)
}

#[tokio::main]
async fn main() {
    let app = Router::new()
        .route("/upload", post(upload))
        .layer(CorsLayer::permissive());

    let addr = SocketAddr::from(([127, 0, 0, 1], 3000));
    println!("🚀 Servidor en http://{}", addr);
    println!("🚀 Servidor en http://localhost:3000");

    axum::serve(
        tokio::net::TcpListener::bind(addr).await.unwrap(),
        app,
    )
    .await
    .unwrap();
}