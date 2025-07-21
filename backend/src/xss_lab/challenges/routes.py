from fastapi import APIRouter
from starlette import status

router = APIRouter(prefix="/challenges", tags=["challenges"])


@router.post("/input_reflection/{input}", status_code=status.HTTP_200_OK)
async def input_reflection(
    input: str, 
):
    """
    Challenge to reflect user input back to them.
    """
    return {"reflected_input": input + "prefix"}
