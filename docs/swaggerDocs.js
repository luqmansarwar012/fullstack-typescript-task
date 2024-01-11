// Search API
/**
 * @swagger
 * /search:
 *   post:
 *     summary: Search for something
 *     description: Performs a search based on the provided criteria
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               query:
 *                 type: string
 *     responses:
 *       200:
 *         description: Successful search
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *       400:
 *         description: Bad Request
 *       500:
 *         description: Internal Server Error
 */

// Clear-cache API
/**
 * @swagger
 * /clear-cache:
 *   post:
 *     summary: Clear the cacheeee
 *     description: Clears the cache logic
 *     responses:
 *       200:
 *         description: Cache cleared successfully
 *       500:
 *         description: Internal Server Error
 */
