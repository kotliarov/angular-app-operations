#!/bin/bash

set -e

if [ "x$1" = "x" ]; then
	echo "Error: I need a destination for the virtualenv."
	exit 1
fi

ENV_TO_MAKE="$1"

if [ ! -d "$ENV_TO_MAKE" ]; then
	echo "Making new environment."
	virtualenv3.7 "$ENV_TO_MAKE"
	source "$ENV_TO_MAKE"/bin/activate

	# Pre-requirements - old versions of pip and setuptools are pretty broken
	pip install 'pip>1.5'
	pip install 'setuptools>5'
    pip install -r requirements.txt

else
	echo "Environment already exists, not re-making."
fi

