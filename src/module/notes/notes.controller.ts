import { Controller, Get, Request, UseGuards,Post, Body,Param } from '@nestjs/common';

import { NotesDto } from './dto/notes.dto';
import { NoteService } from './notes.service';