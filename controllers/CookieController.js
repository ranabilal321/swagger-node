/**
 * @swagger
 * /cookies:
 *    get:
 *      tags:
 *          - Cookies
 *      summary:
 *      consumes:
 *        - application/json
 *      responses:
 *        200:
 *          description:
 */
function cookies(req, res) {
    try {
        let response = [
            {
                flavor: 'Peanut Butter',
                flavorId: 1,
            },
            {
                flavor: 'Oatmeal',
                flavorId: 2,
            }
        ];

        res.status(200).json({
            rows: response
        });
    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
}

/**
 * @swagger
 * /cookies/:flavorId:
 *    get:
 *      tags:
 *          - Cookies
 *      summary:
 *      consumes:
 *        - application/json
 *      responses:
 *        200:
 *          description:
 */
function cookieById(req, res) {
    try {
        let response = {};
        const flavorId = req.params.flavorId;
        switch (flavorId) {
            case 1:
                response = {
                    flavor: 'Peanut Butter',
                    flavorId: 1,
                }
                break;
            case 2:
                response = {
                    flavor: 'Oatmeal',
                    flavorId: 2,
                }
                break;
            default:
                response = {
                    error: 'Flavor-Does-Not-Exist'
                };
                break;
        }

        res.status(200).json({
            rows: response
        });
    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
}

/**
 * @swagger
 * /cookies:
 *    post:
 *      tags:
 *          - Cookies
 *      summary:
 *      consumes:
 *        - application/json
 *      parameters:
 *        - name: body
 *          in: body
 *          schema:
 *            type: object
 *            properties:
 *              flavor:
 *                type: string
 *      responses:
 *        200:
 *          description:
 */
function persistCookie(req, res) {
    try {
        if (!req.body.flavor) {
            res.status(400).json({ 
                error: 'Invalid-Flavor' 
            });
        }
        let response = {
            flavor: req.body.flavor,
            flavorId: Math.floor(Math.random()* 10),
        };

        res.status(200).json({
            rows: response
        });
      } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
}

module.exports = {
    cookies,
    cookieById,
    persistCookie
}