# from google.cloud import translate
from google.cloud import translate_v2 as translate

# text = ["storm", "landscape", "mountain", "fog", "nature", "rain", "lightning", "sky", "thunderstorm", "no person", "travel", "mist", "dawn", "thunder", "cloud", "water", "sunset", "snow", "valley", "hike"]
# def translate():

#     from google.cloud import translate_v2 as translate

#     translate_client = translate.Client()

#     result = translate_client.translate(text, source_language='en', target_language='es')
#     print(result)
#     # for value in result.items():  #accessing values
#     #     print(value)
    
#     # target = 'es'
#     # output = translate_client.translate(
#     #     text,
#     #     target_language=target)
#     # print(u"{}".format(output))
#     # return output

# translate()
# translate_results()
# # detect_language("hola")

# # print(detect_language)

def translate_results(target, text):
    """Translates text into the target language.

    Target must be an ISO 639-1 language code.
    See https://g.co/cloud/translate/v2/translate-reference#supported_languages
    """
    import six
    from google.cloud import translate_v2 as translate

    translate_client = translate.Client()

    if isinstance(text, six.binary_type):
        text = text.decode("utf-8")

    # Text can also be a sequence of strings, in which case this method
    # will return a sequence of results for each text.
    result = translate_client.translate(text, target_language=target)
    print(result)
    print(u"{}".format(result["translatedText"]))
    return u"{}".format(result["translatedText"])
  

# translate_results('ja','hello')