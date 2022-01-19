import { Router } from 'express'
import swaggerUi from 'swagger-ui-express'
import Yaml from 'yamljs'
import path from 'path'

const swaggerDocument = Yaml.load(
    path.join(process.cwd(), 'src', 'openapi.yaml')
)

const router = Router()

router.use('/', swaggerUi.serve)
router.get('/', swaggerUi.setup(swaggerDocument))

export default router
