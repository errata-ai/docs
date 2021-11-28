"""api.py

An implementation of SSG-like OAS3 spec generation.

See https://gist.github.com/jdkato/156944741f134dca3d0a18dafcfa9803.
"""
import os
import pathlib

import frontmatter
import oyaml as yaml


def str_presenter(dumper, data):
    """Format multi-line strings using `|-`.
    """
    if len(data.splitlines()) > 1:
        return dumper.represent_scalar(
            "tag:yaml.org,2002:str", data, style="|")
    return dumper.represent_scalar("tag:yaml.org,2002:str", data)


def extract_meta(f_obj):
    """Create a `description` field from a file's contents.
    """
    meta, content = frontmatter.parse(f_obj.read())
    meta["description"] = content
    return meta


def generate(root):
    """Generate our OpenAPI specification file.
    """
    template = root / "template.yml"
    compiled = root / "spec.yml"

    with template.open() as t, compiled.open("w+") as s:
        data = yaml.load(t)

        # API-wide `info` section:
        with (root / "src" / "info.md").open() as info:
            data["info"] = extract_meta(info)

        # API-wide `components`:
        params = {}
        for param in (root / "src" / "parameters").glob("**/*.md"):
            with param.open() as p:
                params[param.name.split(".")[0]] = extract_meta(p)
        data["components"]["parameters"] = params

        # Endpoints:
        endpoints = {}
        for ep in (root / "src" / "endpoints").iterdir():
            point = "/" + ep.name

            # Sanity check: this ensures that we're ignoring irrelevant
            # files such as `.DS_STORE`.
            if not ep.is_dir():
                continue

            endpoints[point] = {}
            for desc in ep.glob("**/*.md"):
                method = desc.as_posix().split("/")[-1].split(".")[0]
                with desc.open() as d:
                    endpoints[point][method] = extract_meta(d)
        data["paths"] = endpoints

        # Write our OAS3-compliant specification.
        compiled.write_text(yaml.dump(
            data,
            allow_unicode=True,
            default_flow_style=False
        ))
        print("Successfully compiled an OAS3-compliant specification.")


if __name__ == "__main__":
    yaml.add_representer(str, str_presenter)
    generate(pathlib.Path("website/static/api"))
