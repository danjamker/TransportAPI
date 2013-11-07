test:
<<<<<<< HEAD
        DEBUG= ./node_modules/.bin/mocha -R spec -t 5000

test-debug:
        DEBUG=forecast.io ./node_modules/.bin/mocha -R spec -t 5000

test-docs:
        DEBUG=coinbase* ./node_modules/.bin/mocha -R doc -t 5000 > docs/docs.html

test-markdown:
        DEBUG=coinbase* ./node_modules/.bin/mocha -R markdown -t 5000 > docs/docs.md
=======
		DEBUG= ./node_modules/.bin/mocha -R spec -t 5000

test-debug:
		DEBUG=TransportAPI ./node_modules/.bin/mocha -R spec -t 5000

test-docs:
		DEBUG=coinbase* ./node_modules/.bin/mocha -R doc -t 5000 > docs/docs.html

test-markdown:
		DEBUG=coinbase* ./node_modules/.bin/mocha -R markdown -t 5000 > docs/docs.md
>>>>>>> 3b700112d7712f215ccf3fb24f1cb30112d0b281
        
.PHONY: test