import logging
import os
from contextlib import asynccontextmanager

import uvicorn
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

logging.basicConfig(level=logging.INFO)


@asynccontextmanager
async def lifespan(app: FastAPI):
    logging.info("FastAPI application has started.")
    yield
    # Clean up and release the resources
    logging.info("FastAPI application is shutting down.")


# Define a Pydantic model for the request body
class EchoRequest(BaseModel):
    value: str


# Create a FastAPI app instance
app = FastAPI(lifespan=lifespan)

# Configure CORS to allow requests from your Next.js app deployed on Vercel
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "https://your-vercel-app.vercel.app"  # Replace with your actual Next.js URL
    ],  # Replace with your actual Next.js URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# Example endpoint to demonstrate usage
@app.get("/")
async def read_root():
    logging.info("Root endpoint called.")
    return {"message": "Hello, World!"}


@app.post("/api/echo")
async def echo(request: EchoRequest):
    """
    API endpoint that receives a variable from the client and returns it.

    :param request: JSON payload containing a 'value' field.
    :return: JSON with the received value.
    """
    logging.info(
        "Echo endpoint called with value: %s", request.value
    )  # Log the received value
    return {"received": request.value}


# def main():
#     """
#     Main entry point for the application.

#     This function prints "Hello, world!" once, then enters a loop to print a counter
#     alongside "Hello, world!" every second for ten iterations.

#     :return: None
#     """
#     print("Hello, world!")
#     i = 1  # initialize the counter
#     while i <= 10:
#         print(f"[{i}] Hello, world!", flush=True)
#         i += 1
#         sleep(1)


def main():
    """
    Entry point for running the application.
    """
    uvicorn.run(
        "asset_processing_service_ai.main:app",
        host="0.0.0.0",
        port=int(os.getenv("PORT", default=5000)),
        log_level="info",
    )


if __name__ == "__main__":
    main()
