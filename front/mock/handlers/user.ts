import { rest } from 'msw';
import { TEST_TOKEN } from '../../mock/consts';

// const baseURL = 'http://localhost:9000/';

export const userHandlers = [
  rest.post(`/api/oauth/login/:id`, (req, res, ctx) => {
    const { id } = req.params;
    console.log(id);

    if (parseInt(id) === 2) {
      return res(ctx.status(200), ctx.json([{ client_id: 2, name: 'codeMonkey2', email: 'test2@gmail.com' }]));
    }

    if (parseInt(id) === 1) {
      return res(
        ctx.status(200),
        ctx.json([{ client_id: 1, name: 'codeMonkey', email: 'test@gamil.com', token: TEST_TOKEN }]),
      );
    }
  }),
];
