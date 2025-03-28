# Use an official Python runtime as a parent image
FROM python:3.12-slim

# TODO: INSTALL VIDEO EDITING TOOLS - whisper

# Set the working directory in the container
WORKDIR /app

# Copy dependency files and the package folder into the container
COPY pyproject.toml poetry.lock README.md /app/ 
COPY asset_processing_service_ai /app/asset_processing_service_ai

# Disable Poetry's virtual environment creation so that dependencies are installed globally
ENV POETRY_VIRTUALENVS_CREATE=false

# Install Poetry
RUN pip install poetry

# Configure Poetry to not create a virtual environment
RUN poetry config virtualenvs.create false

# Install dependencies with Poetry
# RUN poetry install --no-root
RUN poetry install 

# Copy the rest of your app's code into the container
COPY . /app

# Run the service when the container launches
# pyproject.toml
# [tool.poetry.scripts]  
# asset-processing-service-ai = "asset_processing_service_ai.main:main"  
#poetry run asset-processing-service-ai

#CMD ["poetry", "run", "asset-processing-service-ai"]
CMD ["python", "-m", "asset_processing_service_ai.main"]

# Set the entrypoint and default command
#ENTRYPOINT ["poetry", "run"]  # Added Code
#CMD ["asset-processing-service-ai"]  # Changed Code
