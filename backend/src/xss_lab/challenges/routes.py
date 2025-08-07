from fastapi import APIRouter
from starlette import status
from fastapi.responses import JSONResponse

router = APIRouter(tags=["challenges"])

allowed_post = [
    "input_reflection",
    "dom_clobbering",
    "mxss",
    "jqm_popup"
    ]

@router.post("/jqm_eval/insecure/{input:path}", status_code=status.HTTP_200_OK)
async def jqm_eval_insecure_input_reflection(
    input: str, 
):
    """
    Challenge to reflect user input back to them.
    """
    return {"reflected_input": input}


@router.post("/jqm_eval/secure/{input}", status_code=status.HTTP_200_OK)
async def jqm_eval_secure_input_reflection(
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


@router.post("/{challenge_type}/{input:path}", status_code=status.HTTP_200_OK)
async def input_reflection(
    challenge_type: str,
    input: str, 
):
    """
    Challenge to reflect user input back to them.
    """
    if challenge_type not in allowed_post:
        return JSONResponse(
            status_code=status.HTTP_404_NOT_FOUND,
            content={"detail": "Invalid challenge type."},
        )
    return {"reflected_input": input}

