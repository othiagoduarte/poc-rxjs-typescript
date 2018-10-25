import * as express from "express";
import { interfaces, controller, httpGet, httpPost, httpDelete, request, queryParam, response, requestParam } from "inversify-express-utils";
import { inject } from "inversify";
import { FooService } from "../services/foo.service";

@controller("/foo")
export class FooController implements interfaces.Controller {

    constructor( @inject("FooService") private fooService: FooService ) {}

    @httpGet("/")
    public index(req: express.Request, res: express.Response, next: express.NextFunction): string {
        return this.fooService.get(req.query.id);
    }

    @httpGet("/")
    public list(@queryParam("start") start: number, @queryParam("count") count: number): string {
        return this.fooService.get(start, count);
    }

    @httpPost("/")
    public async create(@request() req: express.Request, @response() res: express.Response) {
        try {
            await this.fooService.create(req.body);
            res.sendStatus(201);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    }

    @httpDelete("/:id")
    public delete(@requestParam("id") id: string, @response() res: express.Response): Promise<void> {
        return this.fooService.delete(id)
            .then(() => res.sendStatus(204))
            .catch((err: Error) => {
                res.status(400).json({ error: err.message });
            });
    }
}