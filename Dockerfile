FROM ruby:2.6.4

WORKDIR /apptest
ADD Gemfile Gemfile.lock /apptest/
RUN bundle install --path vendor/cache

RUN curl -sL https://deb.nodesource.com/setup_9.x | bash -
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
RUN apt-get update && apt-get install -y yarn
RUN apt-get install -y nodejs postgresql-client
ENV BUNDLE_PATH /apptest/.gems
ENV GEM_HOME /apptest/.gems

