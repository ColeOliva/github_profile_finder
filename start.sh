#!/bin/bash

(cd frontend && npm start) & (cd backend && npm start) & wait
