from sqlalchemy.orm import Session
from . import models, schemas, auth

# --- User CRUD Functions ---

def get_user_by_username(db: Session, username: str):
    """Fetches a user from the database by their username."""
    return db.query(models.User).filter(models.User.username == username).first()

def create_user(db: Session, user: schemas.UserCreate):
    """Creates a new user, hashes their password, and saves it to the database."""
    hashed_password = auth.get_password_hash(user.password)
    db_user = models.User(username=user.username, hashed_password=hashed_password)
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user

# --- Post CRUD Functions ---

def get_posts(db: Session, skip: int = 0, limit: int = 100):
    """Fetches a list of posts from the database, newest first."""
    return db.query(models.Post).order_by(models.Post.id.desc()).offset(skip).limit(limit).all()

def get_post(db: Session, post_id: int):
    """Fetches a single post from the database by its ID."""
    return db.query(models.Post).filter(models.Post.id == post_id).first()

def create_user_post(db: Session, post: schemas.PostCreate, user_id: int):
    """Creates a new post associated with a specific user ID."""
    db_post = models.Post(**post.dict(), owner_id=user_id)
    db.add(db_post)
    db.commit()
    db.refresh(db_post)
    return db_post

def update_post(db: Session, post_id: int, title: str, content: str):
    """Updates a post's title and content in the database."""
    db_post = get_post(db=db, post_id=post_id)
    if db_post:
        db_post.title = title
        db_post.content = content
        db.commit()
        db.refresh(db_post)
    return db_post

def delete_post(db: Session, post_id: int):
    """Deletes a post from the database."""
    db_post = get_post(db=db, post_id=post_id)
    if db_post:
        db.delete(db_post)
        db.commit()
    return db_post