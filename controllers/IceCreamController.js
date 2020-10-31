/**
 * @swagger
 * /iceCream:
 *    get:
 *      tags:
 *          - IceCream
 *      summary:
 *      consumes:
 *        - application/json
 *      responses:
 *        200:
 *          description:
 */
function iceCream(req, res) {
    try {
        let response = [
            {
                flavor: 'Strawberry',
                flavorId: 1,
            },
            {
                flavor: 'Chocolate',
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
 * /iceCream/:flavorId:
 *    get:
 *      tags:
 *          - IceCream
 *      summary:
 *      consumes:
 *        - application/json
 *      responses:
 *        200:
 *          description:
 */
function iceCreamById(req, res) {
    try {
        let response = {};
        const flavorId = req.params.flavorId;
        switch (flavorId) {
            case 1:
                response = {
                    flavor: 'Strawberry',
                    flavorId: 1,
                };
                break;
            case 2:
                response = {
                    flavor: 'Chocolate',
                    flavorId: 2,
                };
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
 * /iceCream:
 *    post:
 *      tags:
 *          - IceCream
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
function persistIceCream(req, res) {
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
    iceCream,
    iceCreamById,
    persistIceCream
}