import express from 'express';

const router = express.Router();

const GITHUB_USERNAME = 'SAYAN2122';
const GITHUB_API_BASE = 'https://api.github.com';
const HEADERS = {
  'User-Agent': 'Portfolio-Website',
  Accept: 'application/vnd.github.v3+json',
};

// GET /api/github/profile
router.get('/profile', async (req, res) => {
  try {
    const response = await fetch(`${GITHUB_API_BASE}/users/${GITHUB_USERNAME}`, {
      headers: HEADERS,
    });

    if (!response.ok) {
      return res.status(response.status).json({
        success: false,
        message: `GitHub API error: ${response.statusText}`,
      });
    }

    const data = await response.json();
    return res.status(200).json(data);
  } catch (error) {
    console.error('Error fetching GitHub profile:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to fetch GitHub profile.',
    });
  }
});

// GET /api/github/repos
router.get('/repos', async (req, res) => {
  try {
    const response = await fetch(
      `${GITHUB_API_BASE}/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=20`,
      { headers: HEADERS }
    );

    if (!response.ok) {
      return res.status(response.status).json({
        success: false,
        message: `GitHub API error: ${response.statusText}`,
      });
    }

    const data = await response.json();
    return res.status(200).json(data);
  } catch (error) {
    console.error('Error fetching GitHub repos:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to fetch GitHub repositories.',
    });
  }
});

export default router;
