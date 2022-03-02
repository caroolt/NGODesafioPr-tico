const router = require('express').Router();
const candidatesTable = require('./candidatesTable');
const Candidate = require('./Candidate');
const CandidateSerializer = require('../../Serializer').CandidateSerializer;

router.get('/', async (request, response) => {
  const results = await candidatesTable.list()
  response.status(200)

  const serializer = new CandidateSerializer(
    response.getHeader('Content-Type')
  )

  response.send(
    serializer.serialize(results)
  )
});

router.post('/', async (request, response, middlewareErros) => {
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

router.get('/:idCandidate', async (request, response, middlewareErros) => {
  try {
    const id = request.params.idCandidate
    const candidate = new Candidate({ id: id });
    await candidate.load();
    response
      .status(200)

    const serializer = new CandidateSerializer(
      response.getHeader('Content-Type'),
      ['name', 'createdAt', 'updatedAt']
    )

    response.send(
      serializer.serialize(candidate)
    );

  } catch (erro) {
    middlewareErros(erro);
  }
});

router.put('/:idCandidate', async (request, response, middlewareErros) => {
  try {
    const id = request.params.idCandidate
    const dadosRecebidos = request.body

    const dados = Object.assign({}, dadosRecebidos, { id: id })
    const candidate = new Candidate(dados);

    await candidate.update()

    response.status(200)
    const message = {
      'message': 'User was updated successfully'
    }

    const serializer = new CandidateSerializer(
      response.getHeader('Content-Type')
    );

    response.send(serializer.serialize(message));

  } catch (erro) {
    middlewareErros(erro);
  }
});

router.delete('/:idCandidate', async (request, response, middlewareErros) => {
  try {
    const id = request.params.idCandidate
    const candidate = new Candidate({ id: id });
    await candidate.load();
    await candidate.delete();

    response.status(200);
    const message = {
      'message': 'User was deleted successfully'
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