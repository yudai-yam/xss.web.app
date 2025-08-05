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


@router.get("/url_injection/{input}", status_code=status.HTTP_200_OK)
async def input_reflection(
    input: str, 
):
    """
    Challenge to reflect user input back to them.
    """
    return {"reflected_input": input}


@router.post("/jqm_eval/{input:path}", status_code=status.HTTP_200_OK)
async def input_reflection(
    input: str, 
):
    """
    Challenge to reflect user input back to them.
    """
    return {"reflected_input": input}


@router.post("/mxss/{input:path}", status_code=status.HTTP_200_OK)
async def input_reflection(
    input: str, 
):
    """
    Challenge to reflect user input back to them.
    """
    return {"reflected_input": input}