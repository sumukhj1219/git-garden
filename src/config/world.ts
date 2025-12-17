// Trees
export function mapContributionsToTrees(
    contributions:number,
    minTrees=10,
    maxTrees=150
) {
    const normalized = Math.log10(contributions + 1) / Math.log10(10000 + 1)
    return Math.floor(
        minTrees + (maxTrees - minTrees) * normalized
    )
}