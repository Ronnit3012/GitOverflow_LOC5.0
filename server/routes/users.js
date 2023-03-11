import express from "express";
import {
    getUser,
    getUserFollowers,
    getUserFollowing,
    // addRemoveFollower,
    addRemoveFollowing,
} from '../controllers/users.js';
import { verifyToken } from '../middlewares/auth.js';

const router = express.Router();

/* READ */
// router.get('/:id', verifyToken, getUser);
router.get('/:id', getUser);

router.get('/:id/followers', verifyToken, getUserFollowers);
// router.get('/:id/followers', getUserFollowers);

router.get('/:id/followings', verifyToken, getUserFollowing);
// router.get('/:id/followings', getUserFollowing);

/* UPDATE */
// router.patch('/:id/:followerId', verifyToken, addRemoveFollower);
// router.patch('/:id/:followerId', addRemoveFollower);

// router.patch('/:id/:followingId', verifyToken, addRemoveFollowing);
router.patch('/:id/:followingId', addRemoveFollowing);

export default router;