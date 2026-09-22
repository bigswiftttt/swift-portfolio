export function Roll({ children }: { children: string }) {
    return (
        <span className="roll">
            <span className="roll-inner" data-text={children}>
                {children}
            </span>
        </span>
    );
}