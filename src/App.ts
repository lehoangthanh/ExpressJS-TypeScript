import express from 'express'

class App {
  public express: any
  public Router: any

  constructor() {
    this.express = express()
    this.Router = express.Router()
    this.mountRoutes()
  }

  private mountRoutes(): void {
    const router = this.Router.get('/', (req: any, res: any) => {
      res.json({
        message: 'Hello'
      })
    })
    this.express.use('/', router)
  }
}

export default new App().express