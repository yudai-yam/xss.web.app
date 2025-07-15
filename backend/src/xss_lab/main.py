from fastapi import FastAPI
import uvicorn
import logging
from xss_lab.conf import settings
from xss_lab.challenges.routes import router as challange_router


# Set up the logger
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(name)s: %(message)s"
)
logger = logging.getLogger(__name__)

app = FastAPI(
    root_path="/api",
)

app.include_router(challange_router)

@app.get("/")
async def root():
    return {"message": "Hello World"}


def dev():
    try:
        logger.info("Starting development server...")
        uvicorn.run(
            "xss_lab.main:app",
            host=settings.host,
            port=settings.port,
            log_level="info",
        )
    except Exception as e:
        logger.error(f"Error starting server: {e}")
        