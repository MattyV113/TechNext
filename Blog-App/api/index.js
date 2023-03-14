import express from 'express';
import postRoutes from './routes/posts.js';
import authRoutes from './routes/auth.js';
import usersRoutes from './routes/users.js';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import multer from 'multer';

const app = express();
app.use(cors());
app.use(cookieParser());
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '../client/public/uploads');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({ storage });

app.post('/api/upload', upload.single('file'), function (req, res) {
  const file = req.file;
  if (!file) return res.json('No file exists!');
  res.status(200).json(file.filename);
});

app.use(express.json());
app.use('/api/posts', postRoutes);
app.use('/api/users', usersRoutes);
app.use('/api/auth', authRoutes);

const PORT = 5000;

app.listen(process.env.PORT || PORT, () => {
  console.log(`Listening on Port ${PORT}`);
});
