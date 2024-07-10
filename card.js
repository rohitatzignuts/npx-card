import boxen from "boxen";
import chalk from "chalk";
import { createPromptModule } from "inquirer";
import clear from "clear";
import open from "open";

// clear the terminal before showing the npx card
clear()

const prompt = createPromptModule();

const questions = [
    {
        type: "list",
        name: "action",
        message: "What do you want to do?",
        choices: [
            {
                // Use chalk to style headers
                name: `ask tates here: ${chalk.bold("email")}?`,
                value: () => {
                    open("laveshc@zignuts.com");
                    console.log("\nLooking forward to hearing your message and replying to you!\n");
                }
            },
            {
                name: "Exit",
                value: () => {
                    console.log("you go girlll🏳️‍🌈!\n");
                }
            }
        ]
    }
];

const data = {
    name: chalk.bold.green("             Lovesh Nigga "),
    handle: chalk.white("@lovdesh"),
    fact: chalk.hex('#B10000')('I love givin head!'),
    npx: chalk.hex('#A1AB00')("npx niggesh"),

    labelFact: chalk.hex('#FF6262').bold("     Fun Fact:"),
    labelCard: chalk.hex('#FFF976').bold("           Card:")
};

const me = boxen(
    [
        `${data.name}`,
        ``,
        `${data.labelFact}  ${data.fact}`,
        ``,
        `${data.labelCard}  ${data.npx}`,
        ``,
        `${chalk.bold(
            "what up dawgs 🙌,"
        )}`,
        `${chalk.bold("this is yo super gay homie lovesh here ")}`,
        `${chalk.bold(
            "i am cringe, immatured, weak, feminine"
        )}`,
        `${chalk.bold(
            "imbecile chigga !!!"
        )}`,
        `${chalk.bold(
            "i am shit at most of things that i do"
        )}`

    ].join("\n"),
    {
        margin: 1,
        float: 'center',
        padding: 2,
        borderStyle: "double",
        borderColor: "blue"
    }
);

// Show the boxen
console.log(me);
prompt(questions).then(answer => answer.action());