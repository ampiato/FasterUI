#!/bin/bash

mkdir -p artifacts
earthly --artifact '+all/*' ./artifacts/
