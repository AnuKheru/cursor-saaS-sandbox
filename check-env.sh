#!/bin/bash

# Afficher les versions
echo "Node version:"
node --version || { echo "Erreur avec Node"; exit 1; }

echo "Git version:"
git --version || { echo "Erreur avec Git"; exit 1; }


# Vérifier l'état du repo
echo "Vérification de l'état du repo:"
git status || { echo "Erreur lors de git status"; exit 1; }


# Si tout est OK
echo "Environment OK"
