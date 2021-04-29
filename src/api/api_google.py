#Api Google
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