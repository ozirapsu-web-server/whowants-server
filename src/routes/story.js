var express = require('express');
var router = express.Router();
const storyController = require('../controllers/storyController');
const auth = require('../middlewares/auth');
const upload = require('../modules/multer');

/**
 * 사연 조회
 */
router.get('/info/:idx', storyController.getStoryInfo);

/**
 * 사연 이미지 조회
 */
router.get('/info/:idx/image', storyController.getStoryImages);

/**
 * 사연 등록
 */
router.post(
  '/',
  auth.checkToken,
  upload.array('images', 10),
  storyController.postStory
);

/**
 * 최근 사연 조회
 */
router.get('/recent', storyController.getRecentStory);

/**
 * 주목할 만한 사연 조회
 */
router.get('/hot', storyController.getHotStory);

module.exports = router;
