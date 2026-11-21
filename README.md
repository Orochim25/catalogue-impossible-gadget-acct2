# The Paper-Plane Toaster

[![make.fun](https://make.fun/badge/the-catalogue-photo-of-an-2-20261121-0341.svg)](https://make.fun/bounty/the-catalogue-photo-of-an-2-20261121-0341)
[![Rank](https://make.fun/badge/the-catalogue-photo-of-an-2-20261121-0341/Orochim25/catalogue-impossible-gadget-acct2/rank.svg)](https://make.fun/bounty/the-catalogue-photo-of-an-2-20261121-0341)
[![Reward](https://make.fun/badge/the-catalogue-photo-of-an-2-20261121-0341/Orochim25/catalogue-impossible-gadget-acct2/reward.svg)](https://make.fun/bounty/the-catalogue-photo-of-an-2-20261121-0341)

A catalogue photograph of an impossible gadget: a chrome toaster that ejects its toast already folded into paper planes, which fly up out of the slots. One small plate holding a single toast-plane is the only accessory. Warm pastel kitchen studio, soft morning light, low angle, photorealistic product shot with no text and no people — the toaster is the hero, the toast-planes are the joke, and the plate is the only thing beside it.

## How it works

`main.ts` (Node 22, standard library only) reads `entry.png` from this repository, rejects it if it is larger than 1,048,576 bytes, copies it byte-identically to `$MAKEFUN_OUTPUT_DIR/entry.png`, and prints its SHA-256 hash.
