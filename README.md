# Cursor SaaS Sandbox

![CI status](https://github.com/AnuKheru/cursor-saaS-sandbox/actions/workflows/ci.yml/badge.svg)

Environnement JS préparé avec Node.js v22 LTS, Cursor IDE et Git.

"hello World !"

Pour répondre à la question 3 - Intégration Continue (CI) basique
Voici le script :

name: Check Env

on:
push:
branches: - main

jobs:
check-env:
runs-on: ubuntu-latest

    steps:
      - name: Checkout repository
        uses: actions/checkout@v3

      - name: Installer Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '14'  # ou la version que tu utilises

      - name: Installer Cursor
        run: |
          # Si Cursor doit être installé, ajouter ici la commande d'installation
          # Exemple : wget ou npm, selon la méthode d'installation
          echo "Installation de Cursor..."
          # Placeholder pour l'installation de Cursor
          # Si Cursor est déjà dans le repo ou installé globalement, cette étape peut être sautée

      - name: Exécuter le script check-env.sh
        run: |
          chmod +x check-env.sh
          ./check-env.sh
