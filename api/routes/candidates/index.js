const router = require('express').Router();
const candidatesTable = require('./candidatesTable');
const Candidate = require('./Candidate');
const CandidateSerializer = require('../../Serializer').CandidateSerializer;

router.get('/total', async (request, response) => {
  const results = await candidatesTable.list()
  response.status(200)

  const serializer = new CandidateSerializer(
    response.getHeader('Content-Type')
  )

  response.send(
    serializer.serialize(results)
  )
});

router.post('/candidate', async (request, response, middlewareErros) => {
  try {
    const receivedData = request.body;
    const candidate = new Candidate(receivedData);
    await candidate.create();

    response.status(201)

    const serializer = new CandidateSerializer(
      response.getHeader('Content-Type')
    )

    response.send(
      serializer.serialize(candidate)
    );

  } catch (erro) {
    middlewareErros(erro);
  }
});

router.get('/total/:idCandidate', async (request, response, middlewareErros) => {
  try {
    const id = request.params.idCandidate
    const candidate = new Candidate({ id: id });
    await candidate.load();
    response
      .status(200)

    const serializer = new CandidateSerializer(
      response.getHeader('Content-Type'),
      ['name', 'votes']
    )

    response.send(
      serializer.serialize(candidate)
    );

  } catch (erro) {
    middlewareErros(erro);
  }
});

router.post('/total/:idCandidate', async (request, response, middlewareErros) => {
  try {
    const id = request.params.idCandidate

    let candidate = await candidatesTable.getById(id);
    const totalDeVotos = candidate.votes + 1;
    const votos = {
      "votes": totalDeVotos
    };

    const dados = Object.assign({}, { id: id }, votos)
    const newCandidate = new Candidate(dados);

    await newCandidate.update(dados)

    const message = 'Candidate has received a new vote';
    const Response = { ...dados, message }

    response.status(200)
      .send(Response);
  } catch (erro) {
    middlewareErros(erro);
  }
});

router.delete('/candidate/:idCandidate', async (request, response, middlewareErros) => {
  try {
    const id = request.params.idCandidate
    const candidate = new Candidate({ id: id });
    await candidate.load();
    await candidate.delete();

    response.status(200);
    const message = {
      'message': 'Candidate was deleted successfully'
    }

    const serializer = new CandidateSerializer(
      response.getHeader('Content-Type')
    );

    response.send(serializer.serialize(message));

  } catch (erro) {
    middlewareErros(erro);
  }
});

module.exports = router; 