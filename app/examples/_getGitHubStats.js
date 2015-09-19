#!/usr/bin/node

(function() {
  'use strict';

  var
    gitHubApiKey = process.env.GITHUB_API_KEY,
    http = require('https'),
    _write = function(name, data, callback) {
      var
        fs = require('fs'),
        content = JSON.stringify(data);

      fs.writeFile(name, content, function() {
        console.log('Wrote to ' + name + ': ' + content);
        callback();
      });
    },
    _apiGet = function(endpoint, callback) {
      var options = {
        host: 'api.github.com',
        port: 443,
        path: '/repos/sbstnmsch/dashbot/' + endpoint,
        headers: {
          'User-Agent': 'sbstnmsch',
          Authorization: 'Basic ' +
            new Buffer(gitHubApiKey + ':' + 'x-oauth-basic')
            .toString('base64')
        }
      };
      http.get(options, function(res) {
        var body = '';
        res.on('data', function(data) {
          body += data;
        });
        res.on('end', function() {
          callback(JSON.parse(body));
        });
        res.on('error', function(e) {
          console.error('Got error: ' + e.message);
          callback([]);
        });
      });
    },
    _apiGetCollaboratorCount = function(callback) {
      _apiGet('collaborators', function(data) {
        _write('collaborators.json', {value: data.length}, callback);
      });
    },
    _apiGetIssueCount = function(callback) {
      _apiGet('issues', function(data) {
        _write('issues.json', {value: data.length}, callback);
      });
    },
    _apiGetForkCount = function(callback) {
      _apiGet('forks', function(data) {
        _write('forks.json', {value: data.length}, callback);
      });
    },
    _apiGetStargazerCount = function(callback) {
      _apiGet('stargazers', function(data) {
        _write('stargazers.json', {value: data.length}, callback);
      });
    },
    _done = function() {
      console.log('🍺  Done.');
    };

  if (gitHubApiKey) {
    _apiGetCollaboratorCount(
      function() {
        _apiGetIssueCount(
          function() {
            _apiGetForkCount(
              function() {
                _apiGetStargazerCount(
                  _done
                );
              }
            );
          }
        );
      }
    );
  } else {
    console.error('Missing API key for Github.com.');
  }
})();
