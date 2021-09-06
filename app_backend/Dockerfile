FROM gcr.io/google_appengine/python

# Create a virtualenv for the application dependencies.
RUN virtualenv -p python3 /env
ENV PATH /env/bin:$PATH

ADD requirements.txt /app/requirements.txt
RUN /env/bin/pip install --upgrade pip && /env/bin/pip install -r /app/requirements.txt
ADD appbackend/. /app

CMD gunicorn -b :$PORT demobackend.wsgi
# [END docker]
