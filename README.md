# Sol-opoly 
<img width="500" alt="logo" src="https://github.com/akulguptax/Sol-opoloy/assets/56613943/e9420c56-5c0d-4444-8939-8f1a900eb8cf">

## Under-collateralized monopoly built on-chain with real profits!

Inspiration
We love playing Monopoly in our apartment at home, and often implement complex financial transactions among ourselves in-game. We thought, "Why not take this party to a platform so others can enjoy it as well ?! And what better than Solana, with its performance benefits and financial interoperability?"

What it does
This is an on-chain and Solana-specific (check out the locations) version of Monopoly, offering players a competitive opportunity to buy-in and win money as well as take advantage of debt financing (with aggressive terms and dynamic interest rates). High risk, high reward :) This can be extended to provide financial primitives to assemble in-gain transactions of arbitrary complexity.

How we built it
We leveraged Anchor, a development platform for DApps on Solana. React/typescript constituted the bulk of the front-end client, while smart contracts for the chain were written on rust. Special shout out to Jonas Hahn from the Solana Foundation for his unbounded help and enthusiasm!

Challenges we ran into
We experienced many challenges, beginning with a steep learning curve to understand how to interact with the Solana blockchain, switching between public devnet and localnet, deploying smart contracts. updating the 'programID' and IDL in several different places, and much more. It required different ways of thinking - for example, Aman's EVM background lent mental models that were ill-suited for the Solana paradigm. We were forced to optimize the size of our structures due to the particular architecture of the chain, while sharing in the ever-present pains of version control.

We physically slept 2 hours over the entire event, had several members fall sick, and consumed unhealthy levels of caffeine.

Accomplishments that we're proud of
HAVING FUN PLAYING OUR OWN GAME :))) !!!
Successfully deploying an operational game on Solana (for people who weren't failure)
A relatively rich feature set, given the time constraints
Close adherence to our original vision of the game, and it's extensibility
What we learned
High-level Technically: Core architecture/functionality of the blockchain, and designing DApps (with the resource constraints) Tools/Tech Stack: We worked more with Rust, and learned new frameworks like Anchor. Learned how easy the public devnet is to use. And we're always relearning the age-old lesson that even seemingly trivial products become surprisingly complex to build.

What's next for Sol-opoly
Allowing arbitrary transfers and lending between players 2.A meta-game of speculating on game outcomes
More realistic financial primitives such as credit systems, variable interest rates, and opportunities specific to the blockchain - in-game rule variation as a function of network state, secondary-market liquidity of in-game assets, and much more!
