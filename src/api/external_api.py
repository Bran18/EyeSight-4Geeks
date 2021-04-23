from clarifai_grpc.channel.clarifai_channel import ClarifaiChannel
from clarifai_grpc.grpc.api import service_pb2_grpc
stub = service_pb2_grpc.V2Stub(ClarifaiChannel.get_grpc_channel())
from clarifai_grpc.grpc.api import service_pb2, resources_pb2
from clarifai_grpc.grpc.api.status import status_code_pb2

# This is how you authenticate.
metadata = (('authorization', 'Key c36890cd5bde4304b87edbf5af88aead'),)

def request_call_integration(user_url):
    request = service_pb2.PostModelOutputsRequest(
        model_id='aaa03c23b3724a16a56b629203edc62c',
        inputs=[
        resources_pb2.Input(data=resources_pb2.Data(image=resources_pb2.Image(url=user_url)))
        ])
    response = stub.PostModelOutputs(request, metadata=metadata)


    if response.status.code != status_code_pb2.SUCCESS:
        raise Exception("Request failed, status code: " + str(response.status.code))

    request_data=[]
    for concept in response.outputs[0].data.concepts:
        request_data.append(concept.name)
        #print('%12s: %.2f' % (concept.name, concept.value))
    return request_data

    