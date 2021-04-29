
from google.cloud import translate_v2 as translate

# text = ["storm", "landscape", "mountain", "fog", "nature", "rain", "lightning", "sky", "thunderstorm", "no person", "travel", "mist", "dawn", "thunder", "cloud", "water", "sunset", "snow", "valley", "hike"]
# def translate():

#     from google.cloud import translate_v2 as translate

#     translate_client = translate.Client()

#     result = translate_client.translate(text, source_language='en', target_language='es')
    
#     target = 'es'
#     output = translate_client.translate(
#         text,
#         target_language=target)
#     # print(u"{}".format(output))
#     # print(u"{}".format(output["translatedText"]))
#     for s in range(len(output)):
# 	    print(u"{}".format(output[s]["translatedText"]))
    
# translate()

def translate_results(target, text):

    import six
    from google.cloud import translate_v2 as translate

    translate_client = translate.Client()

    if isinstance(text, six.binary_type):
        text = text.decode("utf-8")

    output = translate_client.translate(
        text,
        target_language=target)

    data=[]
    for word in range(len(output)):
        data.append(u"{}".format(output[word]["translatedText"]))
    return data