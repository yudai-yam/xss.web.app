from fastapi import APIRouter
from starlette import status

router = APIRouter(tags=["challenges"])


@router.post("/input_reflection/{input:path}", status_code=status.HTTP_200_OK)
async def input_reflection(
    input: str, 
):
    """
    Challenge to reflect user input back to them.
    """
    return {"reflected_input": input}

@router.post("/dom_clobbering/{input:path}", status_code=status.HTTP_200_OK)
async def input_reflection(
    input: str, 
):
    """
    Challenge to reflect user input back to them.
    """
    return {"reflected_input": input}

