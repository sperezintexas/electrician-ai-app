import express from 'express';
import mongoose from 'mongoose';
import authRoutes from './routes/authRoutes';

const app = express();

app.use(express.json());