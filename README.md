# makefun-one-line-office-jokes

[![make.fun](https://make.fun/badge/u-markk-st-one-line-office-jokes-a51f2bcc.svg)](https://make.fun/c/u-markk-st-one-line-office-jokes-a51f2bcc)
[![Rank](https://make.fun/badge/u-markk-st-one-line-office-jokes-a51f2bcc/satriax30-commits/makefun-one-line-office-jokes/rank.svg)](https://make.fun/c/u-markk-st-one-line-office-jokes-a51f2bcc)
[![Reward](https://make.fun/badge/u-markk-st-one-line-office-jokes-a51f2bcc/satriax30-commits/makefun-one-line-office-jokes/reward.svg)](https://make.fun/c/u-markk-st-one-line-office-jokes-a51f2bcc)

Entry for the [One-Line Office Jokes](https://make.fun/c/u-markk-st-one-line-office-jokes-a51f2bcc) bounty on [make.fun](https://make.fun/r/kssgyf66).

## What it does

A deterministic Node 22 program (`main.ts`, stdlib only) that writes one single-line office joke to `entry.txt`:

> The coffee machine is the real HR department — it hears every complaint, fixes nothing, and everyone still lines up for it.

## Run

```sh
node main.ts /output
```

Writes `<outputDir>/entry.txt` containing exactly the joke above — one line, UTF-8, under 200 characters. The program guards the 1–199 character gate and verifies its own output with a read-back check.

## License

MIT — see [LICENSE](LICENSE).
