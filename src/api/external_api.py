from clarifai_grpc.channel.clarifai_channel import ClarifaiChannel
from clarifai_grpc.grpc.api import service_pb2_grpc
stub = service_pb2_grpc.V2Stub(ClarifaiChannel.get_grpc_channel())
from clarifai_grpc.grpc.api import service_pb2, resources_pb2
from clarifai_grpc.grpc.api.status import status_code_pb2

# This is how you authenticate.
metadata = (('authorization', 'Key d6bab7da03ef4fffb9155d70f37b5d5d'),)

#Api Clarify
def request_call_integration(user_url, user_lan):
    request = service_pb2.PostModelOutputsRequest(
        model_id='aaa03c23b3724a16a56b629203edc62c',
        inputs=[
        resources_pb2.Input(data=resources_pb2.Data(image=resources_pb2.Image(url=user_url)))
        ],
        model=resources_pb2.Model(
            output_info=resources_pb2.OutputInfo(
                output_config=resources_pb2.OutputConfig(
                    language=user_lan  
                )
            )
        ))
    response = stub.PostModelOutputs(request, metadata=metadata)




    if response.status.code != status_code_pb2.SUCCESS:
        raise Exception("Request failed, status code: " + str(response.status.code))

    request_data=[]
    for concept in response.outputs[0].data.concepts:
        request_data.append(concept.name)
    return request_data

   