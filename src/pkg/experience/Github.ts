export default class Github {
    public totalContributions!: number
    public username!: string

    constructor(username: string) {
        if (!username || !username.trim()) {
            throw new Error("Username is required");
        }
        this.username = username;
    }

    private async fetchResponse() {
        try {
            const res = await fetch("/api/github", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username: this.username }),
                cache: "no-cache"
            });

            const data = await res.json();

            if (!res.ok || !data.success) {
                console.error("GitHub API error:", data);
                return;
            }

            this.totalContributions = data.contributions;
        } catch (error) {
            console.error("Fetch failed:", error);
        }
    }

     async loadContributions() {
        await this.fetchResponse();
        return this.totalContributions
    }
}