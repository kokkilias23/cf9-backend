
import express from 'express';
import dotenv from 'dotenv';
<<<<<<< HEAD
import userRoutes from './routes/user.routes';  
dotenv.config();

const app = express();
app.use(express.json());

=======
import userRoutes from './routes/user.routes';
import authRoutes from './routes/auth.routes';

dotenv.config();

const app = express();
app.use(express.json())

app.use('/api/auth', authRoutes);
>>>>>>> 8774fe84a0c7f097bfa0ccc50c963b6957b6c2eb
app.use('/api/users', userRoutes);


export default app;
