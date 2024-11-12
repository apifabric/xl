# coding: utf-8
from sqlalchemy import DECIMAL, DateTime  # API Logic Server GenAI assist
from sqlalchemy import Column, Float, Integer, Text
from sqlalchemy.ext.declarative import declarative_base

########################################################################################################################
# Classes describing database for SqlAlchemy ORM, initially created by schema introspection.
#
# Alter this file per your database maintenance policy
#    See https://apilogicserver.github.io/Docs/Project-Rebuild/#rebuilding
#
# Created:  November 12, 2024 06:08:47
# Database: sqlite:////opt/projects/by-ulid/01JCFFT75FXNWF2G23CV2HC5QP/database/db.sqlite
# Dialect:  sqlite
#
# mypy: ignore-errors
########################################################################################################################
 
from database.system.SAFRSBaseX import SAFRSBaseX
from flask_login import UserMixin
import safrs, flask_sqlalchemy
from safrs import jsonapi_attr
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import relationship
from sqlalchemy.orm import Mapped
from sqlalchemy.sql.sqltypes import NullType
from typing import List

db = SQLAlchemy() 
Base = declarative_base()  # type: flask_sqlalchemy.model.DefaultMeta
metadata = Base.metadata

#NullType = db.String  # datatype fixup
#TIMESTAMP= db.TIMESTAMP

from sqlalchemy.dialects.sqlite import *



class ScorekaartKandidaat(SAFRSBaseX, Base):
    __tablename__ = 'Scorekaart kandidaat'
    _s_collection_name = 'ScorekaartKandidaat'  # type: ignore
    __bind_key__ = 'None'

    id = Column('id', Integer, primary_key=True, quote = True)
    Unnamed__0 = Column('Unnamed: 0', Float, quote = True)
    Unnamed__1 = Column('Unnamed: 1', Text, quote = True)
    Unnamed__2 = Column('Unnamed: 2', Text, quote = True)
    Unnamed__3 = Column('Unnamed: 3', Text, quote = True)
    Unnamed__4 = Column('Unnamed: 4', Text, quote = True)
    Unnamed__5 = Column('Unnamed: 5', Text, quote = True)
    Unnamed__6 = Column('Unnamed: 6', Text, quote = True)
    Unnamed__7 = Column('Unnamed: 7', Text, quote = True)
    Unnamed__8 = Column('Unnamed: 8', Text, quote = True)
    Unnamed__9 = Column('Unnamed: 9', Float, quote = True)
    Unnamed__10 = Column('Unnamed: 10', Text, quote = True)
    Unnamed__11 = Column('Unnamed: 11', Text, quote = True)

    # parent relationships (access parent)

    # child relationships (access children)
