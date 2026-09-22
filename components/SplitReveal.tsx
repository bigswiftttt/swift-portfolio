import { Fragment } from "react";

type Props = {
    text: string;
    as?: "h1" | "h2" | "p";
    className?: string;
    delay?: number;
    step?: number;
};

export function SplitReveal({
    text,
    as: Tag = "h1",
    className,
    delay = 200,
    step = 90,
}: Props) {
    const words = text.split(" ");

    return (
        <Tag className={className} aria-label={text}>
            {words.map((word, index) => (
                <Fragment key={`${word}-${index}`}>
                    <span className="split-word" aria-hidden="true">
                        <span
                            className="split-word-inner"
                            style={{ animationDelay: `${delay + index * step}ms` }}
                        >
                            {word}
                        </span>
                    </span>
                    {index < words.length - 1 ? " " : null}
                </Fragment>
            ))}
        </Tag>
    );
}