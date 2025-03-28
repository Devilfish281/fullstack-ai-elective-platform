# asset-processing-service-ai

## Overview

**asset-processing-service-ai** is a Python-based service built with FastAPI for processing assets. It leverages Uvicorn as the ASGI server and uses Poetry for dependency management and packaging. The project is containerized with Docker for easy deployment and integration with other services such as a Next.js front end.

## Features

- **FastAPI Backend:** High-performance API built with FastAPI.
- **Uvicorn Server:** ASGI server to serve the FastAPI application.
- **Poetry:** Simplifies dependency management and project packaging.
- **Dockerized Deployment:** Easily build and run the service using Docker.
- **CORS Configured:** Allows requests from your Next.js app deployed on Vercel.

## Installation

### Local Development

1. **Clone the Repository:**
   ```bash
   git clone <repository-url>
   cd asset-processing-service-ai
   ```
