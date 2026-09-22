"use client";

import { useState, type FormEvent } from "react";
import { site } from "@/lib/site";
import { Roll } from "./Roll";

/**
 * Tries to open the visitor's email app with their details pre-filled. Since
 * that silently does nothing on a machine with no default mail app set, the
 * form always shows a fallback afterwards: the finished message, ready to
 * copy, plus a direct mailto link. Swap the submit handler for a real API
 * route later without touching the markup.
 */
export function ContactForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [sent, setSent] = useState(false);
    const [copied, setCopied] = useState(false);

    const subject = `Project enquiry from ${name || "your site"}`;
    const body = `${message}\n\n— ${name}${email ? ` (${email})` : ""}`;
    const mailto = `mailto:${site.email}?subject=${encodeURIComponent(
        subject,
    )}&body=${encodeURIComponent(body)}`;

    function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        window.location.href = mailto;
        setSent(true);
    }

    async function copyMessage() {
        try {
            await navigator.clipboard.writeText(`${subject}\n\n${body}`);
            setCopied(true);
            window.setTimeout(() => setCopied(false), 2000);
        } catch {
            // Clipboard can be blocked; the text is still visible to copy by hand.
        }
    }

    if (sent) {
        return (
            <div className="rule-draw pt-8">
                <p className="subtitle">On its way, or ready to send</p>
                <p className="measure mt-3 text-graphite">
                    Your email app should have opened with this filled in. If nothing
                    happened, use the link or copy the message below.
                </p>

                <p className="mt-6 flex flex-wrap gap-3">
                    <a className="button" href={mailto}>
                        <Roll>Open my email app</Roll>
                    </a>
                    <button type="button" className="button button-quiet" onClick={copyMessage}>
                        <Roll>{copied ? "Copied" : "Copy the message"}</Roll>
                    </button>
                </p>

                <pre className="measure mt-6 whitespace-pre-wrap border border-rule p-4 text-sm text-graphite">
                    {`To: ${site.email}\nSubject: ${subject}\n\n${body}`}
                </pre>

                <button
                    type="button"
                    className="mt-6 text-sm text-graphite underline"
                    onClick={() => setSent(false)}
                >
                    Edit and send another
                </button>
            </div>
        );
    }

    return (
        <form onSubmit={onSubmit} className="grid gap-8 sm:grid-cols-2">
            <label className="field">
                <span>Name</span>
                <input
                    type="text"
                    name="name"
                    required
                    autoComplete="name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                />
            </label>

            <label className="field">
                <span>Email</span>
                <input
                    type="email"
                    name="email"
                    required
                    autoComplete="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />
            </label>

            <label className="field sm:col-span-2">
                <span>Project</span>
                <textarea
                    name="message"
                    rows={5}
                    required
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                />
            </label>

            <div className="sm:col-span-2">
                <button type="submit" className="button">
                    <Roll>Send it over</Roll>
                </button>
            </div>
        </form>
    );
}