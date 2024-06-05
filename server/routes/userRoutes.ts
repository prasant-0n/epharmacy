import express from 'express';
import { authUser, deleteUser, getUserById, getUserProfile, getUsers, registerUser, updateUser, updateUserProfile } from '../controller/userContoller';
import { admin, protect } from '../middleware/authMiddleware';



const router = express.Router();

router.route("/register").post(registerUser).get(protect,admin,getUsers);

router.route("/login").post(authUser);

router
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);
router
  .route("/:id")
  .delete(protect, admin, deleteUser)
  .get(protect, admin, getUserById)
  .put(protect, admin, updateUser);

export default router;
